package com.example.doit;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class SplashAction extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_action);

        /* PART THREE BEGINS HERE, CODE ABOVE ALREADY GENERATED IN PREVIOUS PART */

        //We are beginning by implementing Splash Screen

        //Hide bar along top of screen so that the splash screen is full screen
        getSupportActionBar().hide();

        //Establish the activity following the splash screen popping up
        final Intent i = new Intent(SplashAction.this,MainActivity.class);

        //The code that pops splash screen on run for specified time before
        //loading the main activity
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                startActivity(i);
                finish();
            }
        }, 1000); // = 1 second

    }
}