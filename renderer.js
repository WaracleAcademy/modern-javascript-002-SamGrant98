export function render(htmlContent)
{
    const MainView = document.queryselector(`primaryView`);
    MainView.innerHTML = htmlContent
}
render('<h2> text </h2>');