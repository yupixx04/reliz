     <script>
    document.querySelectorAll('.enroll-btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-id') || Date.now().toString();
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Перевіряємо, чи курс вже є у "замовленні"
            const existingCourse = cart.find(item => item.id === courseId);

            if (existingCourse) {
                existingCourse.quantity += 1;
            } else {
                const courseTitle = this.parentElement.querySelector('h3').textContent;
                const coursePrice = this.parentElement.querySelector('.service-price').textContent;
                const courseImg = this.parentElement.parentElement.querySelector('.service-img').src;

                cart.push({
                    id: courseId,
                    title: courseTitle,
                    price: coursePrice,
                    img: courseImg,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Курс додано до замовлення!');
        });
    });
</script>
