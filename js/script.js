function buttonClicked()
{
    alert('Query Submitted Suscesfully');
}

function changeText()
{
    document.getElementById('p4').innerHTML = "Javascript text";
}
// Nav bar lighting the actual name of the page we are on.
$(function()
{
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(i)
    {
        if(pathname.includes(pages[i]))
        {
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }else if(this.className.includes('active'))
        {
            $(this).removeClass('active');
        }
    });

});