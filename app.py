from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/status", methods=["GET"])
def status():
    return jsonify({"message": "LangGraph backend is running!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=2024, debug=True)
