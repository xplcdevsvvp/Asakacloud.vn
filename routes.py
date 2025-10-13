from flask import session, render_template, redirect, url_for, request, jsonify
from app import app, db
from replit_auth import require_login, make_replit_blueprint
from flask_login import current_user
from models import Service, Order
import io
import qrcode
import base64

app.register_blueprint(make_replit_blueprint(), url_prefix="/auth")


@app.before_request
def make_session_permanent():
    session.permanent = True


@app.route('/')
def index():
    return render_template('index.html', user=current_user)


@app.route('/profile')
@require_login
def profile():
    orders = Order.query.filter_by(user_id=current_user.id).order_by(Order.created_at.desc()).all()
    return render_template('profile.html', user=current_user, orders=orders)


@app.route('/services')
def services():
    all_services = Service.query.all()
    return render_template('services.html', user=current_user, services=all_services)


@app.route('/buy/<int:service_id>')
@require_login
def buy_service(service_id):
    service = Service.query.get_or_404(service_id)
    return render_template('buy.html', user=current_user, service=service)


@app.route('/api/create-order', methods=['POST'])
@require_login
def create_order():
    data = request.get_json()
    service_id = data.get('service_id')
    payment_method = data.get('payment_method', 'bank_transfer')
    
    service = Service.query.get_or_404(service_id)
    
    order = Order(
        user_id=current_user.id,
        service_id=service_id,
        total_amount=service.price,
        payment_method=payment_method,
        status='pending'
    )
    
    db.session.add(order)
    db.session.commit()
    
    bank_info = {
        'bank_name': 'Vietcombank',
        'account_number': '0123456789',
        'account_name': 'CONG TY ASAKACLOUD',
        'amount': service.price,
        'content': f'ASAKACLOUD {order.id}',
        'qr_code': generate_qr_code(f'ASAKACLOUD {order.id}', service.price)
    }
    
    return jsonify({
        'success': True,
        'order_id': order.id,
        'bank_info': bank_info
    })


@app.route('/api/init-services', methods=['POST'])
def init_services():
    if Service.query.count() > 0:
        return jsonify({'message': 'Services already initialized'})
    
    services_data = [
        {
            'name': 'Basic',
            'description': 'Lựa chọn cơ bản',
            'cpu': 'Intel® Xeon® E5 2697v3',
            'ram': 'RAM từ 3GB',
            'storage': 'SSD NVMe',
            'bandwidth': '10Gbps port',
            'price': 25000,
            'badge': None,
            'is_featured': False
        },
        {
            'name': 'Balanced',
            'description': 'Cân bằng hiệu năng',
            'cpu': 'Intel® Xeon® Gold 6150',
            'ram': 'RAM từ 2GB',
            'storage': 'SSD NVMe',
            'bandwidth': '10Gbps port',
            'price': 60000,
            'badge': 'BEST SELLER',
            'is_featured': True
        },
        {
            'name': 'Ryzen',
            'description': 'Công nghệ mới nhất',
            'cpu': 'AMD® Ryzen™ 9 9900X/9950X',
            'ram': 'RAM từ 8GB',
            'storage': 'SSD NVMe',
            'bandwidth': '10Gbps port',
            'price': 400000,
            'badge': 'HIGH PERFORMANCE',
            'is_featured': True
        },
        {
            'name': 'Performance',
            'description': 'Hiệu năng tối ưu',
            'cpu': 'Intel® Xeon® Gold 6146',
            'ram': 'RAM từ 4GB',
            'storage': 'SSD NVMe U2',
            'bandwidth': '10Gbps port',
            'price': 75000,
            'badge': None,
            'is_featured': False
        },
        {
            'name': 'VPS Server',
            'description': 'Virtual Private Server',
            'cpu': 'Intel® Xeon® Gold 6150',
            'ram': 'RAM từ 4GB',
            'storage': 'SSD NVMe U2',
            'bandwidth': '10Gbps port',
            'price': 75000,
            'badge': None,
            'is_featured': False
        },
        {
            'name': 'Dedicated Server',
            'description': 'Máy chủ vật lý độc lập',
            'cpu': 'Intel/AMD',
            'ram': 'RAM DDR4/DDR5',
            'storage': 'SSD NVMe',
            'bandwidth': '10Gbps+ port',
            'price': 600000,
            'badge': 'TÀI NGUYÊN ĐỘC LẬP',
            'is_featured': False
        }
    ]
    
    for service_data in services_data:
        service = Service(**service_data)
        db.session.add(service)
    
    db.session.commit()
    
    return jsonify({'message': 'Services initialized successfully', 'count': len(services_data)})


def generate_qr_code(content, amount):
    qr_content = f"Bank: Vietcombank\nSTK: 0123456789\nSo tien: {amount:,} VND\nNoi dung: {content}"
    
    qr = qrcode.make(qr_content)
    
    buffer = io.BytesIO()
    qr.save(buffer, format='PNG')
    buffer.seek(0)
    
    img_base64 = base64.b64encode(buffer.getvalue()).decode()
    
    return f"data:image/png;base64,{img_base64}"
