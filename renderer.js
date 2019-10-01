export function render(htmlContent)
{
    const MainView = document.queryselector(`primaryview`);
    MainView.innerHTML = htmlContent
}
render('<h2> text </h2>');