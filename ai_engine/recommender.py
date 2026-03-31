def recommend_events(events, interest):
    return [e for e in events if e["category"].lower() == interest.lower()]