from transformers import pipeline


class NLP:
    def __init__(self) -> None:
        self.model = pipeline("summarization", model="t5-small",
                              tokenizer="t5-small", framework="tf")

    def summarize(self, reviews: str, max_length=100, min_length=5) -> str:
        res = self.model(reviews, max_length=max_length, min_length=min_length)
        return res[0]['summary_text']
