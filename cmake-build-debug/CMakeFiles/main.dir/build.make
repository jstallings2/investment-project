# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.15

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 2019.2\bin\cmake\win\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 2019.2\bin\cmake\win\bin\cmake.exe" -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug"

# Include any dependencies generated for this target.
include CMakeFiles/main.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/main.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/main.dir/flags.make

CMakeFiles/main.dir/src/User.cpp.obj: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/User.cpp.obj: CMakeFiles/main.dir/includes_CXX.rsp
CMakeFiles/main.dir/src/User.cpp.obj: ../src/User.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/main.dir/src/User.cpp.obj"
	C:\msys64\mingw64\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\main.dir\src\User.cpp.obj -c "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\User.cpp"

CMakeFiles/main.dir/src/User.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/User.cpp.i"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\User.cpp" > CMakeFiles\main.dir\src\User.cpp.i

CMakeFiles/main.dir/src/User.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/User.cpp.s"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\User.cpp" -o CMakeFiles\main.dir\src\User.cpp.s

CMakeFiles/main.dir/src/Stock.cpp.obj: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/Stock.cpp.obj: CMakeFiles/main.dir/includes_CXX.rsp
CMakeFiles/main.dir/src/Stock.cpp.obj: ../src/Stock.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/main.dir/src/Stock.cpp.obj"
	C:\msys64\mingw64\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\main.dir\src\Stock.cpp.obj -c "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Stock.cpp"

CMakeFiles/main.dir/src/Stock.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/Stock.cpp.i"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Stock.cpp" > CMakeFiles\main.dir\src\Stock.cpp.i

CMakeFiles/main.dir/src/Stock.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/Stock.cpp.s"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Stock.cpp" -o CMakeFiles\main.dir\src\Stock.cpp.s

CMakeFiles/main.dir/src/Game.cpp.obj: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/Game.cpp.obj: CMakeFiles/main.dir/includes_CXX.rsp
CMakeFiles/main.dir/src/Game.cpp.obj: ../src/Game.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/main.dir/src/Game.cpp.obj"
	C:\msys64\mingw64\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\main.dir\src\Game.cpp.obj -c "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Game.cpp"

CMakeFiles/main.dir/src/Game.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/Game.cpp.i"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Game.cpp" > CMakeFiles\main.dir\src\Game.cpp.i

CMakeFiles/main.dir/src/Game.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/Game.cpp.s"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\Game.cpp" -o CMakeFiles\main.dir\src\Game.cpp.s

CMakeFiles/main.dir/src/driver.cpp.obj: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/driver.cpp.obj: CMakeFiles/main.dir/includes_CXX.rsp
CMakeFiles/main.dir/src/driver.cpp.obj: ../src/driver.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/main.dir/src/driver.cpp.obj"
	C:\msys64\mingw64\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\main.dir\src\driver.cpp.obj -c "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\driver.cpp"

CMakeFiles/main.dir/src/driver.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/driver.cpp.i"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\driver.cpp" > CMakeFiles\main.dir\src\driver.cpp.i

CMakeFiles/main.dir/src/driver.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/driver.cpp.s"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\driver.cpp" -o CMakeFiles\main.dir\src\driver.cpp.s

CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj: CMakeFiles/main.dir/includes_CXX.rsp
CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj: ../src/StockCollectionHandler.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj"
	C:\msys64\mingw64\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\main.dir\src\StockCollectionHandler.cpp.obj -c "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\StockCollectionHandler.cpp"

CMakeFiles/main.dir/src/StockCollectionHandler.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/StockCollectionHandler.cpp.i"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\StockCollectionHandler.cpp" > CMakeFiles\main.dir\src\StockCollectionHandler.cpp.i

CMakeFiles/main.dir/src/StockCollectionHandler.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/StockCollectionHandler.cpp.s"
	C:\msys64\mingw64\bin\g++.exe $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\src\StockCollectionHandler.cpp" -o CMakeFiles\main.dir\src\StockCollectionHandler.cpp.s

# Object files for target main
main_OBJECTS = \
"CMakeFiles/main.dir/src/User.cpp.obj" \
"CMakeFiles/main.dir/src/Stock.cpp.obj" \
"CMakeFiles/main.dir/src/Game.cpp.obj" \
"CMakeFiles/main.dir/src/driver.cpp.obj" \
"CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj"

# External object files for target main
main_EXTERNAL_OBJECTS =

main.exe: CMakeFiles/main.dir/src/User.cpp.obj
main.exe: CMakeFiles/main.dir/src/Stock.cpp.obj
main.exe: CMakeFiles/main.dir/src/Game.cpp.obj
main.exe: CMakeFiles/main.dir/src/driver.cpp.obj
main.exe: CMakeFiles/main.dir/src/StockCollectionHandler.cpp.obj
main.exe: CMakeFiles/main.dir/build.make
main.exe: CMakeFiles/main.dir/linklibs.rsp
main.exe: CMakeFiles/main.dir/objects1.rsp
main.exe: CMakeFiles/main.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_6) "Linking CXX executable main.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\main.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/main.dir/build: main.exe

.PHONY : CMakeFiles/main.dir/build

CMakeFiles/main.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\main.dir\cmake_clean.cmake
.PHONY : CMakeFiles/main.dir/clean

CMakeFiles/main.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon" "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon" "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug" "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug" "C:\Users\camre\Desktop\Course Syllabi Vanderbilt\2020 Hackathon\cmake-build-debug\CMakeFiles\main.dir\DependInfo.cmake" --color=$(COLOR)
.PHONY : CMakeFiles/main.dir/depend

