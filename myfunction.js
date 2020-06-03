function hasCollided(lbullet,lwall) 
{
    bRightEdge = lbullet.x + lbullet.width;
    wLeftEdge = lwall.x
    if(bRightEdge>=wLeftEdge)
    {
        return true;
    } 
    return false;
}