<?php
use Carbon\Carbon;
/**
 * Write code on Method
 *
 * @return response()
 */
function convertYmdToMdy($date)
{
    return Carbon::createFromFormat('Y-m-d', $date)->format('m-d-Y');
}

/**
 * Write code on Method
 *
 * @return response()
 */
function convertMdyToYmd($date)
{
    return Carbon::createFromFormat('m-d-Y', $date)->format('Y-m-d');
}