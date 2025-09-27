#!/usr/bin/env python3
"""
Hello World Python Script for User Profile Frontend

This script provides basic hello world functionality and demonstrates
Python integration within a React TypeScript frontend project.

Purpose:
- Demonstrates Python scripting capabilities alongside frontend development
- Provides utility functions that could be used for build processes or data processing
- Serves as a template for additional Python scripts in the project

Usage:
    python scripts/hello_world.py
    python scripts/hello_world.py --name "Your Name"
    python scripts/hello_world.py --help
"""

import argparse
import sys
from datetime import datetime


def hello_world(name: str = "World") -> str:
    """
    Generate a personalized hello world message.
    
    Args:
        name (str): Name to greet. Defaults to "World".
        
    Returns:
        str: Formatted greeting message.
    """
    return f"Hello, {name}!"


def get_project_info() -> dict:
    """
    Get basic information about the frontend project.
    
    Returns:
        dict: Project information including name, type, and timestamp.
    """
    return {
        "project_name": "User Profile Frontend",
        "project_type": "React + TypeScript + Vite",
        "script_purpose": "Hello World demonstration with Python integration",
        "timestamp": datetime.now().isoformat(),
        "python_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
    }


def display_project_info():
    """Display formatted project information."""
    info = get_project_info()
    print("\n" + "="*50)
    print("PROJECT INFORMATION")
    print("="*50)
    for key, value in info.items():
        print(f"{key.replace('_', ' ').title()}: {value}")
    print("="*50 + "\n")


def main():
    """Main function to handle command line arguments and execute the script."""
    parser = argparse.ArgumentParser(
        description="Hello World Python script for User Profile Frontend project"
    )
    parser.add_argument(
        "--name", 
        type=str, 
        default="World",
        help="Name to greet (default: World)"
    )
    parser.add_argument(
        "--info",
        action="store_true",
        help="Display project information"
    )
    
    args = parser.parse_args()
    
    greeting = hello_world(args.name)
    print(f"\n🐍 {greeting}")
    
    if args.info:
        display_project_info()
    else:
        print("💡 Use --info flag to see project details")
        print("💡 Use --help flag to see all available options\n")


if __name__ == "__main__":
    main()
