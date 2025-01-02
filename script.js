document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.copy-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.getAttribute('data-text');
            
            // 클립보드에 텍스트 복사
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // 버튼 텍스트 변경
                    button.textContent = '복사 완료!';
                    setTimeout(() => {
                        button.textContent = '복사하기'; // 원래 텍스트로 복원
                    }, 2000); // 2초 후 원래 텍스트로 복원
                })
                .catch(err => {
                    console.error('복사 실패:', err);
                    button.textContent = '복사 실패!';
                    setTimeout(() => {
                        button.textContent = '복사하기'; // 원래 텍스트로 복원
                    }, 2000);
                });
        });
    });
});
