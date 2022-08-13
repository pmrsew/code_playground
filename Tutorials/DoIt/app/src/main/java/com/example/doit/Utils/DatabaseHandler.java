package com.example.doit.Utils;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.example.doit.Model.ToDoModel;

public class DatabaseHandler extends SQLiteOpenHelper {

    // PART FOUR STARTS BY CREATING UTILS PACKAGE THEN CREATING THIS CLASS

    //SQLite is the native database provider on android

    private static final int VERSION = 1;
    private static final String NAME = "toDoListDatabase";
    private static final String TODO_TABLE = "todo";
    private static final String ID = "id";
    private static final String TASK = "task";
    private static final String STATUS = "status";
    private static final String CREATE_TODO_TABLE = "CREATE TABLE " + TODO_TABLE + "(" + ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
            TASK + "TEXT, " + STATUS + " INTEGER)";

    private SQLiteDatabase db;

    private DatabaseHandler(Context context){
        super(context, NAME, null, VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db){
        db.execSQL(CREATE_TODO_TABLE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion){
        //Drop exisiting tables
        db.execSQL("DROP TABLE IF EXISTS " + TODO_TABLE);
        //Create tables again
        onCreate(db);
    }

    public void openDatabase(){
        db = this.getWritableDatabase();
    }

    public void insertTask(ToDoModel task){

    }




}
