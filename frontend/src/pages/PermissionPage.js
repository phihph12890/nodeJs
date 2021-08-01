import toast from 'toast-me';

const PermissionPage = {
    render() {
        return `
            <div >
                <h1>KHÔNG PHẢI ADMIN, TỪ CHỐI QUYỀN TRUY CẬP!</h5>
            </div>
        `
    }, afterRender() {
        if (isAuthenticated() === false || isAuthenticated().permission !== 1) {
            toast(
                'Không phải ADMIN. Từ chối quyền truy cập!',
                { duration: 2500 },
                {
                    // label: 'Confirm',
                    action: () => alert('Cool!'),
                    class: 'my-custom-class', // optional, CSS class name for action button
                },
            );
        }
    }
}
export default PermissionPage;