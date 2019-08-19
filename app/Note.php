<?php

namespace BoomNotes;

use Illuminate\Database\Eloquent\Model;


class Note extends Model
{
    
    protected $fillable = ['title', 'description', 'created_at', 'updated_at'];
    
    use \Okipa\LaravelModelJsonStorage\ModelJsonStorage;
    
}
